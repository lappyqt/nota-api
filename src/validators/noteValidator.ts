import { body, param } from 'express-validator';

export const noteGetValidator = () => {
    return param('id').isMongoId().withMessage('Incorrect ID format');
}

export const noteCreateValidator = () => {
    return body('title').notEmpty().isLength({ min: 4, max: 200 }).withMessage('Length must be greater than 4 characters and less than 200'),
        body('content').notEmpty().withMessage('Content is empty'),
        body('markup').notEmpty().withMessage('Markup is empty');
}

export const noteDeleteValidator = () => {
    return body('id').isMongoId().withMessage('Incorrect ID format');
}