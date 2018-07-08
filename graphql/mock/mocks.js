// import { MockList } from 'graphql-tools'

export const User = () => ({
    // 未設定の場合も可
    // id: () => 1,
    name: () => "mock 太郎"
  })
  
export const allUser = () => [
  // 完全にmockデータ
  // new MockList([1,10]),
  User,
  User,
]
