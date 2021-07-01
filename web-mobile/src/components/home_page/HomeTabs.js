import React, { Component } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const list = [
    { name: 'Best Selling Curation' },
    { name: 'Most Recent Curation' },
    { name: 'Recommended Curation' },
    { name: 'Popular Categories' },
    { name: 'All Other Curation' },
    { name: 'Best Sellers' },
    { name: 'Buzz on the Social Media' }
];


const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

export const Menu = (list, selected) =>
    list.map(el => {
        const { name } = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });



const selected = 'item1';

class HomeTabs extends Component {
    constructor(props) {
        super(props)
        this.menuItems = Menu(list, selected);

        this.state = {
            selected: 'Best Selling Curation'
        }
    }

    onSelect = key => {
        this.setState({ selected: key });
        this.props.changeCategoryValue(key);
    }

    render() {
        const { selected } = this.state;
        const menu = this.menuItems;
        return (
            <div className='sticky'>
                <div className="tabs card pt-24 pb-24 pl-0 mt-10">

                    <div className="App">
                        <ScrollMenu
                            data={menu}
                            selected={selected}
                            onSelect={this.onSelect}
                        />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default HomeTabs
