// POST DATA SHOULD LOOK LIKE THIS


// id: String,
// content: String,
// timestamp: String,
// location: String, --latitude and longitude
// color: String,

// Character limit for posts should be 650. Linebreak should equal 24 characters

export const POSTS = {
  home: [
    {
      id: '0',
      content: 'This is a post'
    },
    {
      id: '1',
      content: 'This is a post'
    },
    {
      id: '2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque eget dui nec tempor. Duis lacinia magna vel orci ultrices, eget blandit ante tempor. Proin sit amet leo odio. Vivamus lobortis id libero sed auctor. Suspendisse quis velit at lacus mattis convallis. Praesent non eros et nulla sodales bibendum nec at lectus. Vivamus in ligula ut enim fringilla convallis. Pellentesque dictum vel ipsum sed dapibus. Proin et ultricies metus. Nullam sit amet turpis et arcu suscipit mattis quis dapibus mauris. Vestibulum efficitur efficitur leo, sit amet convallis augue tempor ut. Aliquam vitae ipsum lectus. Vivamus sapien elit, auctorasa.'
    },
    {
      id: '3',
      content: 'This is a post'
    },
    {
      id: '4',
      content: 'This is a post'
    },
    {
      id: '5',
      content: 'This is a post'
    },
    {
      id: '6',
      content: 'This is a post'
    },
    {
      id: '7',
      content: 'This is a post'
    },
    {
      id: '8',
      content: 'This is a post'
    },
    {
      id: '9',
      content: 'This is a post'
    },
    {
      id: '10',
      content: 'This is a new post'
    },
  ],
  notice: [
  
  ],
  event: [
  
  ],
  favor: [

  ],
};

export const addPost = (text, type) => {
  const id = POSTS[type].length.toString()
  POSTS[type].unshift({
    id: id,
    content: text
  })
}