import { useState } from 'react';
import styles from './tables.module.scss';
import { Icon } from '@iconify/react';
import { filterParameters } from './prescriptionData'

interface Obj {
  name: string;
  options: string[]
}

interface Props {
  parameters: Obj[]
  name: string;
}

const PopUpMenu: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Obtain the names of each filter parameter from the `filterParameter` array
  const obj: any = props.parameters.find(item => item.name === props.name)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

//   const handleMenuItemClick = (menuItem) => {
//     console.log(`Selected menu item for ${items}:`, menuItem);
   // Handle the selected menu item here
//   };


  return (
    <div className={styles.item_menu}>
      <div className={styles.toggle_button} onClick={toggleMenu}>
        <Icon icon="ph:dots-three" />
      </div>

      {isOpen && <ul className={styles.menu_items}>
        {filterParameters && obj.options.map((option: string) => (
            <li>{option}</li>
        ))}
        </ul>
      }
    </div>
  );
};

export default PopUpMenu;
