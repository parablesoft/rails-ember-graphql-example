import Route from '@ember/routing/route'

const data = [
  {
    name: "Work Stuff",
    todos: [
      {
        content: "Finish the code",
        completedAt: null
      },
      {
        content: "Sit in the meeting",
        completedAt: new Date()
      }
    ]
  },
  {
    name: "Home Stuff",
    todos: [
      {
        content: "Finish the floors",
        completedAt: null
      },
      {
        content: "Take out the trash",
        completedAt: null
      }
    ]
  },
  {
    name: "Side Hustle",
    todos: [
      {
        content: "Work on the thing that I don't have time for so I have more time to work on it.",
        completedAt: null
      }
    ]
  }
]


export default class ApplicationRoute extends Route{


  model(){
    return data
  }

}
