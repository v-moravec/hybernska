import { Projects } from '~/service/Projects';

export default defineEventHandler ((event) => {
  return Projects.find(project => project.id === +event.context.params.id)
})
