import React,{useState,useEffect} from 'react'
import { FlatList,View, StyleSheet,Text} from 'react-native'
import ReposItem from './ReposItem';

// const repositories = [
//   {
//     id: 'jaredpalmer.formik',
//     fullName: 'jaredpalmer/formik',
//     description: 'Build forms in React, without the tears',
//     language: 'TypeScript',
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//   },
//   {
//     id: 'rails.rails',
//     fullName: 'rails/rails',
//     description: 'Ruby on Rails',
//     language: 'Ruby',
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//   },
//   {
//     id: 'django.django',
//     fullName: 'django/django',
//     description: 'The Web framework for perfectionists with deadlines.',
//     language: 'Python',
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//   },
//   {
//     id: 'reduxjs.redux',
//     fullName: 'reduxjs/redux',
//     description: 'Predictable state container for JavaScript apps',
//     language: 'TypeScript',
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//   },
// ];

const styles = StyleSheet.create({
    separator:{
        height:10
    }
})

const ItemSeparator = ()=><View style={styles.separator}/>


const ReposList = () => {
    const [repositories,setRepositories]=useState([]);
    const [error,setError] = useState(false);
    const fetchData = async ()=>{
      try {
         const res = await fetch('http://192.168.0.58:15000/api/repositories')
      const json =await res.json();
      console.log('data',json)
      const mappedData = json.edges.map(item=>{
        const {node:{id,description,fullName,language,forksCount,ratingAverage,stargazersCount,reviewCount,ownerAvatarUrl}}=item
        return ({
          id,description,fullName,language,forksCount,stargazersCount,reviewCount,ratingAverage,ownerAvatarUrl
      })})
      setRepositories(mappedData)
      } catch (error) {
        setError(true)
        console.log(error)
      }
     
    }
    useEffect(()=>{
      fetchData();
    },[])
    if(error){
      return <Text>Error!</Text>
    }
    return (
        <FlatList
            data={repositories}
            renderItem={ReposItem}
            keyExtractor={item=>item.id}
            ItemSeparatorComponent={ItemSeparator}
        />
            
      
    )
}

export default ReposList
