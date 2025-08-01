import { useAtom } from 'jotai'
import { itemJotai } from '../jotai/itemJotai'
import { ItemType } from '../jotai/itemJotai';

export const ItemTable = () => {
    const [ items, setItems ] = useAtom(itemJotai);

    return (
    <table border={1} style={{borderCollapse:'collapse'}}>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {
                items && items.map((item: ItemType, i:number) => {
                    return <tr key={item.id}>
                        <td>{i +1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}
