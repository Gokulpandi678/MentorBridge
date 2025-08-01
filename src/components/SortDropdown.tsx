import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { itemJotai } from '../jotai/itemJotai';

type SortOption = 'name' | 'email' | 'username';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'By Name', value: 'name' },
  { label: 'By Username', value: 'username' },
  { label: 'By Email', value: 'email' },
];

const SortDropdown: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption | null>(null);

  const [ items, setItems ] = useAtom(itemJotai);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (option: SortOption) => {
    if(selected === option){
      setSelected(null);

    }else{
      if(items){
        const sortedItems = [...items]; 
        if (option === 'name') {
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          setItems(sortedItems);
          
        } else if (option === 'email') {
          sortedItems.sort((a, b) => a.email.localeCompare(b.email));
          setItems(sortedItems);

        } else if(option === 'username') {
          sortedItems.sort((a, b) => a.username.localeCompare(b.username));
          setItems(sortedItems);
          
        }
      }
      setSelected(option);
    }
    setIsOpen(false);
    console.log('Selected sort option:', option);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown} style={{ padding: '8px 16px' }} className='btn btn-blue'>
        Sort {selected && `(${selected})`}
      </button>

      {isOpen && (
        <ul>
          {SORT_OPTIONS.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              style={{
                backgroundColor: selected !== option.value ? '' : 'rgba(11, 73, 150, 1)',
              }}
              className='btn btn-blue'
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
