import Joi from "joi";
export const productSchema = Joi.object({
  // product: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().min(1),
    stock: Joi.number().required().min(1),
    description: Joi.string().required(),
    image_url: Joi.string().required(),

});   

export const reviewSchema = Joi.object({
  // review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    body: Joi.string().required(),
  // }).required(),
});
