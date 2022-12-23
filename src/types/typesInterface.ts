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

export interface IUpdateTask{
    id?: number,
    taskStatus: string,
    priorities: string,
    description: string,
    client: {
        id: number,
        name: string,
    },
    category: {
        id: number,
        name: string
    }
}
export interface ICreateTask{
    taskStatus: string,
    priorities: string,
    description: string,
    client: {
        id: number,
        name: string,
    },
    category: {
        id: number,
        name: string
    }
}