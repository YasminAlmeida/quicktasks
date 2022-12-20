export interface IResponseTask {
    id: number,
    moment: Date,
    taskStatus: string,
    priorities: string,
    description: string,
    client: {
        id: number,
        name: string,
        email: string,
        phone: string,
        password: string
    },
    category: {
        id: number,
        name: string
    }
}

export interface IResponseUser {
  data: IResponseTask[],
}