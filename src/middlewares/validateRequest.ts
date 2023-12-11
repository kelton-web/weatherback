import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    console.log("Query:", req.query);
    try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (e: any) {
      console.log("erreur");
    res.status(400).json(e.errors);
    
  }
};

export default validate;
