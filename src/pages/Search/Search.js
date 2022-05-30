import React from "react";

const images = [
  {
    id: "0",
    name: "Painting0",
    img_url:
      "https://ik.imagekit.io/theartling/prod/dynamic_images/Image/1425988347b04641948d29f495532ee3.png?tr=,w-704,h-704",
    author: {
      name: "author0",
      avatar: "",
    },
  },
  {
    id: "1",
    name: "Painting1",
    img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/ab9c98e838cf4aae9ec30bbe629a1826.jpg?tr=,w-704,h-704",
    author: {
        name: "author1",
        avatar: "",
      },
  },
  {
      id: "2",
      name: "Painting2",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/0d8705e14bb64956977a8d5e36167146.jpg?tr=,w-704,h-704",
      author: {
        name: "author2",
        avatar: "",
      },
    },
    {
      id: "3",
      name: "Painting3",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/7b3d99682fa34aa2aad7c0bb76f181e7.jpg?tr=w-733,h-357",
      author: {
        name: "author3",
        avatar: "",
      },
    },    {
      id: "4",
      name: "Aisuluu",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/94838a3043a544a6a1b114a9d712bbb5.jpg?tr=,w-704,h-704",
      author: {
        name: "author2",
        avatar: "",
      },
    },    {
      id: "5",
      name: "Painting1",
      img_url:"https://ik.imagekit.io/theartling/prod/dynamic_images/Image/00db3d801eb941eda0784802b623d980.jpg?tr=,w-506,h-506",
      author: {
        name: "author2",
        avatar: "",
      },
    },  {
      id: "6",
      name: "Painting1",
      img_url:"https://ik.imagekit.io/theartling/prod/products/Product/c8a330924aa84ca29b367d3c4ac9f7b9.jpg?tr=,w-396,h-396",
      author: {
        name: "author2",
        avatar: "",
      },
    }, {
      id: "7",
      name: "Painting1",
      img_url:"https://ik.imagekit.io/theartling/prod/original_images/Screenshot_2022-05-23_at_10.16.40_AM.png?tr=,w-1010,h-540",
      author: {
        name: "author2",
        avatar: "",
      },
    },  {
      id: "8",
      name: "Painting1",
      img_url:"https://ik.imagekit.io/theartling/prod/original_images/Anna_Louise_Richardson__Abdul-Rahman_Abdullah_Watching_studio_view_2022.jpg?tr=,w-610,h-326",
      author: {
        name: "author2",
        avatar: "",
      },
    },
];

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? images
    : images.filter(art =>
        art.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
        art.author.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
      );

  return (
    <div className="App">
      <br/><br/><br/><br/><br/>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /><br/><br/>
      <ul>
        {results.map((item, id) => (
          <li key={id}>
            <img src={item.img_url}/>
            <p>{item.name}</p>
            <p>{item.author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Search;