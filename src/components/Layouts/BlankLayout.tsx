import { PropsWithChildren } from 'react';
import App from '../../App';
import Header from './Header copy';

const BlankLayout = ({ children }: PropsWithChildren) => {
    return (
        <App>
            <Header />
            <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
        </App>
    );
};

export default BlankLayout;
