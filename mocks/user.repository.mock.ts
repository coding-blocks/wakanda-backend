
export const mockUserRepository = {
  findOne(id: number) { return Promise.resolve({id: 10, username: 'user10'})}
}