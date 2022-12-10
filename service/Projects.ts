enum ProjectState {
    DONE = 'Dokončený',
    RUNNING = 'Probíhající',
    TOBE = 'Čeká na schválení'
}

interface Project {
    id: number,
    name: string,
    creator: string,
    state: string,
    image: string
}

const Projects: Project[] = [
  {
    id: 0,
    name: 'Plán parku',
    creator: 'ČZU',
    state: ProjectState.DONE,
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 1,
    name: 'Správa parku',
    creator: 'ČZU',
    state: ProjectState.TOBE,
    image: 'https://images.unsplash.com/photo-1588332039066-f145965edf10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=top&w=400&h=300'
  },
  {
    id: 2,
    name: 'Optimalizace základní desky',
    creator: 'ČVUT',
    state: ProjectState.TOBE,
    image: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  },
]

export { Projects, Project }
