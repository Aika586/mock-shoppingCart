import {useState,useEffect} from 'react'

const useProductDetail=()=>{
  const [products,setProducts]=useState(null)
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/category/electronics',{mode:"cors"})
            .then(res=>{
              if(res.status>=400){
                throw new Error("server error")
              }

              return res.json()
            })
            .then(data=>{return setProducts(data)})
            .catch(error=>setError(error))
            .finally(()=>setLoading(false))
  },[])

  return{products,error,loading}
}



export default function Products(){
const {products,error,loading}=useProductDetail()
if (error) return <p>A network error was encountered</p>;
if (loading) return <p>Loading...</p>;
console.log(products)
const productElements=products.map(product=>{
  
  return(
    <div key={product.id}>
      <img src={product.image} alt={product.title} />

    </div>
  )
})
  return(
    <div>
      {productElements}
    </div>
  )
  }