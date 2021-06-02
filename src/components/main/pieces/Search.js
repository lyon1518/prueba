import { Close, SearchOutlined } from "@material-ui/icons";
import React from "react";
import ButtonIncon from "../../others/ButtonIcon";
import Avatar from "../../others/navbar/Avatar";
import IconText from "../../others/navbar/IconText";

const Search = (props) => {
    const {Members,Tutorials} = props.data.sarch
    const handleActive = ()=>{
        let input = document.querySelector('.js-form-search')
        let searchDropdownMenu = document.querySelector('#searchDropdownMenu')
        let clearSearchResultsIcon = document.querySelector('#clearSearchResultsIcon')
        input.classList.toggle('focus')
        if(searchDropdownMenu.classList.contains('slideInUp')){
            clearSearchResultsIcon.style = "display:none"
            searchDropdownMenu.classList = "hs-form-search-menu-content card dropdown-menu dropdown-card overflow-hidden animated hs-form-search-menu-initialized fadeOut hs-form-search-menu-hidden"
        }else{
            clearSearchResultsIcon.style = "display:-webkit-box"
            searchDropdownMenu.classList = "hs-form-search-menu-content card dropdown-menu dropdown-card overflow-hidden animated hs-form-search-menu-initialized slideInUp"
        }
    }
    return (
        <form className="position-relative">
            <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="tio-search"><SearchOutlined/></i>
                    </div>
                </div>
                <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front"
                    onFocus={()=>handleActive()} 
                    onBlur={()=>handleActive()}
                    data-hs-form-search-options='{
             "clearIcon": "#clearSearchResultsIcon",
             "dropMenuElement": "#searchDropdownMenu",
             "dropMenuOffset": 20,
             "toggleIconOnFocus": true,
             "activeClass": "focus"
           }'/>
                <a id="clearSearchResultsIcon" style={{display: 'none'}} className="input-group-append" href="./a" onClick={()=>handleActive()}>
                    <span className="input-group-text">
                        <i className="tio-clear"><Close/></i>
                    </span>
                </a>
            </div>

            <div id="searchDropdownMenu" className="hs-form-search-menu-content card dropdown-menu dropdown-card overflow-hidden animated ">
                <div className="card-body-height py-3">
                    <small className="dropdown-header mb-n2">Recent searches</small>

                    <div className="dropdown-item bg-transparent text-wrap my-2">
                        <span className="h4 mr-1">
                            <ButtonIncon link="./" text="Gulp" icon={<SearchOutlined/>}/>
                        </span>
                        <span className="h4">
                            <ButtonIncon link="./" text="Notification panel" icon={<SearchOutlined/>}/>
                        </span>
                    </div>

                    <div className="dropdown-divider my-3"></div>

                    <small className="dropdown-header mb-n2">Tutorials</small>

                    {Tutorials.map((e,i)=>{
                        return(
                            <IconText key={"IconText"+i} link="./" icon={e.icon} text={e.name}/>
                        )
                    })}

                    <div className="dropdown-divider my-3"></div>

                    <small className="dropdown-header mb-n2">Members</small>
                    {Members.map((e,i)=>{
                        return(
                            <Avatar key={"avatar"+i} link="./" icon={e.icon} text={e.name} badge={e.badge} type={e.type}/>
                        )
                    })}

                </div>

                <a className="card-footer text-center" href="./">
                    See all results
      <i className="tio-chevron-right"></i>
                </a>
            </div>
        </form>
    )
}
export default Search