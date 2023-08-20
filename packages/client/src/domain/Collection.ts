import CollisionEngine from './CollisionEngine'
import Canvas from './Canvas'
import { CollectionObject } from './interfaces'

export default class Collection<T extends CollectionObject> {
  public head: CollectionItemDecorator<T> | null = null
  public tail: CollectionItemDecorator<T> | null = null
  public size = 0

  public add(item: T) {
    const newItem = new CollectionItemDecorator(item)
    if (!this.tail) {
      this.head = newItem
      this.tail = newItem
      this.size++
      return
    }
    this.tail.next = newItem
    newItem.prev = this.tail
    this.tail = newItem
    this.size++
  }

  delete(item: T) {
    let current = this.head
    while (current?.next) {
      if (item === current.getItem()) {
        if (current === this.head) {
          this.head = current.next
        } else if (current === this.tail) {
          this.tail = current.prev
        } else {
          current.prev!.next = current.next
          current.next.prev = current.prev
        }
        this.size--
        break
      }
      current = current.next
    }
  }

  public getIterator() {
    return new Iterator<T>(this)
  }

  public animate(delay: number, collision: CollisionEngine) {
    const iterator = this.getIterator()
    while (iterator.current()) {
      const item = iterator.current()
      if (!item) return
      item.animate(delay)
      if (collision.checkBottomBoundsCollision(item)) {
        this.delete(item)
      }
      if (collision.checkBasketCollision(item)) {
        item.touchBasket()
        this.delete(item)
      }
      iterator.current()
      iterator.next()
    }
  }

  public render(g: Canvas) {
    const iterator = this.getIterator()
    while (iterator.current()) {
      iterator.current()?.render(g)
      iterator.next()
    }
  }
}

class Iterator<T extends CollectionObject> {
  private currentItem: CollectionItemDecorator<T> | null = null
  constructor(private collection: Collection<T>) {
    if (!this.collection.head) return
    this.currentItem = this.collection.head
  }

  public current() {
    return this.currentItem?.getItem() || null
  }

  public next() {
    if (!this.currentItem?.next) {
      this.currentItem = null
      return
    }
    this.currentItem = this.currentItem?.next
  }
}

class CollectionItemDecorator<T> {
  public next: CollectionItemDecorator<T> | null = null
  public prev: CollectionItemDecorator<T> | null = null
  constructor(private component: T) {}
  public getItem() {
    return this.component
  }
}
