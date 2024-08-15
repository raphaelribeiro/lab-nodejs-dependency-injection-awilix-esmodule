import { Router } from 'express';

export default ({ dependencyInjectionController }) => {
    const router = Router();
    
    router.get('/get', dependencyInjectionController.execute);

    return router;
}

