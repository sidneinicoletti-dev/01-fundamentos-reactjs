import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

import './global.css';

export function App() {
  return (
    <div>
      <Header /> 

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Sidnei Nicoletti" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti velit hic iste dolor, esse voluptatem voluptates perferendis ea laborum explicabo quam officia ipsum laudantium voluptatibus similique in harum culpa!"
          />

          <Post
            author="Gabriel Fernandes"
            content= "Um novo post muito legal!"
          />
        </main>
      </div>
    </div>
  )
}
