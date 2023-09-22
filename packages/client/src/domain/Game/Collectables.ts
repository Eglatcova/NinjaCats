import CollisionEngine from './CollisionEngine'
import Canvas from './Canvas'
import Collection from './Collection'
import Collectable from './Collectable'
import CollectableFactory from './CollectableFactory'

export default class Collectables {
  private collectablesList: Collection<Collectable> = new Collection()

  constructor(private collectableFactory: CollectableFactory) {}

  public spawnCollectables() {
    setInterval(() => {
      this.collectablesList.add(
        this.collectableFactory.createRandomCollectable()
      )
    }, 2000)
  }

  public animate(delay: number, collision: CollisionEngine) {
    const iterator = this.collectablesList.getIterator()
    while (iterator.current()) {
      const item = iterator.current()
      if (!item) return
      item.animate(delay)
      if (collision.checkBottomBoundsCollision(item)) {
        item.touchBottomBound()
        this.collectablesList.delete(item)
      }
      if (collision.checkCatcherCollision(item)) {
        item.touchCatcher()
        this.collectablesList.delete(item)
      }
      iterator.next()
    }
  }

  public render(g: Canvas) {
    const iterator = this.collectablesList.getIterator()
    while (iterator.current()) {
      iterator.current()?.render(g)
      iterator.next()
    }
  }
}
