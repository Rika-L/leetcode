import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['src/**/*.ts'],
    // 忽略没有测试用例的文件
    silent: false,
    passWithNoTests: true,
  },
})
