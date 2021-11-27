declare module "*.hbs" {
  import 'handlebars';

  const content: HandlebarsTemplateDelegate;
  export default content;
}
