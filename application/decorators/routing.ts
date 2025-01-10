import express, { Router, Request, Response  } from 'express';
import { ContainerIOC } from '../ioc/container-ioc';
import { ResponseEntity } from '../../infrastructure/controllers/response/response';
export const appRouter = Router();

interface IOptions {
    path?: string;
    method: 'get'| 'post'| 'put' | 'delete' | 'use' ;
    middlewares?: any[],
}

function routesDecorator(options: IOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const objectClass = addClassToContainer(target.constructor.name, target.constructor);
        addMiddlewaresPost(options.method);
        if(options.middlewares && options.middlewares.length > 0) {
            (appRouter as any)[options.method](options.path, options.middlewares, (req: Request, res: Response)=> {
                return objectClass[propertyKey](req, res)
                .then((data: ResponseEntity<any>) => res.status(data.getStatus()).json(data.getResponse()))
                .catch((error: any) => res.json(error));
               });
        } else {
            (appRouter as any)[options.method](options.path, (req: Request, res: Response)=> {
                return objectClass[propertyKey](req, res)
                .then((data: ResponseEntity<any>) => res.status(data.getStatus()).json(data.getResponse()))
                .catch((error: any) => res.json(error));
               });
        }

    };
}

function addMiddlewaresPost(method: string) {
    if (method === 'post') {
        appRouter.use(express.urlencoded({extended: true}));
        appRouter.use(express.json());
    }
}

function addClassToContainer(key: string, classObject: any): any{
    if(!ContainerIOC.exist(key)) {
        ContainerIOC.container(key, new (classObject)());
    }
    return ContainerIOC.inject(key);
}

export default routesDecorator;