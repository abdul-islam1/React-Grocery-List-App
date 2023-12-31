
import ItemList from '../itemList/ItemList'


function Content({ items, handleCheck, handleDelete }) {

   return (
      <main>
         {items.length ? (
            <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
         ) : (<p style={{ margingTop: "2rem" }}>Your list is empty.</p>)}
      </main>
   )
}

export default Content