import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^.+\\.(scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.svg$': '<rootDir>/svgTransform.ts',
  },
}
