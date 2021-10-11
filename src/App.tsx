import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import {Content} from "./components/Content";
import {SideBar} from "./components/SideBar/SideBar";
import {MoviesContextProvider} from "./components/moviesContext";


export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <MoviesContextProvider>
            <SideBar />
            <Content />
        </MoviesContextProvider>

    </div>
  )
}