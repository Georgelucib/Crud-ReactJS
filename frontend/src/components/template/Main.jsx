import './Main.css';
import React from 'react'
import Header from './Header'

export default props => 
<React.Fragment>
    <Header {...props} />
        <main className="content container-fluid">
            {/* margin top 3 e padding de 3 */}
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    
</React.Fragment>