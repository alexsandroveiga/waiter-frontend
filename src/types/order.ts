export type Order = {
  id: string
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: {
    id: string
    quantity: number
    product: {
      name: string
      imagePath: string
      price: number

      id?: string
      description?: string
      ingredients?: {
        id: string
        name: string
        icon: string
      }[]
      category?: string
    }
  }[]
  createdAt?: string
}
