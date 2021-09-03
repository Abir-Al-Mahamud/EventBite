import React from 'react';

class Headings extends React.Component{
    render(){
        const clicked = this.props.clickedTab;
        const headings = this.props.tabs.map((tab, i) => {
            const name = tab.name;
            const category = i === clicked ? 'active' : '';
        

        return(
            <li
                key={i}
                className={category}
                onClick={() => this.props.onTabSelected(i)}
                >
                {name}{' '}
            </li>
            );
        });

        return(
            <ul className="tab-header">
                {headings}
            </ul>
        );
    }
}

export default class Tabs extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            clickedTab: 0
        }

        this.clickTab = this.clickTab.bind(this)
    }

    clickTab(num){
        this.setState({clickedTab: num})
    }

    render(){
        const tab = this.props.tabs[this.state.clickedTab]
        
        return(
            <div className="tabs-div">
                {/* <h1 className="title-header">Popular in New York</h1> */}
                <div className="tabs">
                    <Headings
                        clickTab={this.state.clickedTab}
                        onTabSelected={this.clickTab}
                        tabs={this.props.tabs}
                    >
                    </Headings>
                    <div className="tab-content">
                        <article>
                            {tab.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}