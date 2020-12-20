import React, {useState, useEffect} from "react";
import PostCard from "../../../components/Main/Post/Card/Card";
import PostCardDetails from "../../../components/Main/Post/CardDetails/CardDetails";
import Perfil from "../../../components/Main/Perfil/Card/Card";
import Filter from "../Sidebar/Filter/Filter";
import Category from "../Sidebar/Category/Category";
import axios from 'axios';
import "./search.css";

export default function SearchCards({title, modalPerfil, abrirFecharModalPerfil, id}) {


    const [search, setSearch] = useState(['']);
    const [posts, setPosts] = useState([]);
    //crio uma const de parametro e atribuo o que foi digitado no input search
    //usando o like para buscar qualquer palavra que contém no titulo
    useEffect(() => {
    const params = {};
    if(search){
        params.title_like = search;
    }
      axios.get('http://localhost:5000/posts?_sort=postedAt&_order=desc', {params})
        .then((response) => {
          setPosts(response.data);
        });
    }, [search]);


    const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/categories')
        .then((response) => {
          setCategories(response.data);
        });
    }, []);


    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/users')
        .then((response) => {
          setUsers(response.data);
        });
    }, []);


    const [comments, setComments] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/comments?_sort=postedAt&_order=desc')
        .then((response) => {
          setComments(response.data);
        });
    }, []);


    //setando os valores dos botões clicados
    const [filter, setFilter] = useState(new Set());
    var filterClick = function (value) { 
      if (filter.has(value)) {
        setFilter(prevFilter => {
          const newSet = new Set(prevFilter);
          newSet.delete(value);
          return newSet;
        });
      } else {
         setFilter(prevFilter => {
          const newSet = new Set(prevFilter);
          newSet.add(value);
          return newSet;
        });
      }
    };
    

    //filtrando os posts da categoria clicada
    const filteredPosts= posts.filter(post => {
      if (filter.size > 0 && !filter.has(post.categoryId))
        return false;

      return true;
    });


    if(title === "Search"){

        return (
            <div className="container-search">
                <div className="card">
                    {filteredPosts.map((filteredPost) => (
                        <PostCard filteredPost={filteredPost} 
                                    key={filteredPost.id} 
                                    users={users} 
                                    categories={categories} 
                                    comments={comments}/>
                    ))}
                </div>
                <div className="sidebar">
                    <Filter search={search} setSearch={setSearch} />
                    <Category categories={categories} 
                              filter={filter} 
                              filterClick={filterClick} />
                </div>
            </div>
          );

    }

    if(title === "SearchDetails"){

        const filterPosts = posts.filter(post => post.id === id);
        return (
            <div>
                {filterPosts.map((filterPost) => (
                    <PostCardDetails modalPerfil={modalPerfil} 
                                        abrirFecharModalPerfil={abrirFecharModalPerfil}
                                        filterPost={filterPost}
                                        key={filterPost.id}
                                        users={users} 
                                        categories={categories} 
                                        comments={comments} />
                ))}
            </div>
          );

    }

    if(title === "Perfil"){

        //const filterPosts = posts.filter(post => post.id === id);
        return (
            <div className="container-perfil">
                {users.map((user) => (
                    <Perfil user={user} key={user.id} />
                ))}
            </div>
          );

    }
 
    
  
}

