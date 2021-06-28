import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from "./Avatar";
import DropDownLeft from './DropDownLeft';
import { Link } from 'react-router-dom';
import Tabs from './Tabs';
import SendData from '../pages/SendData';

export default function MenuListComposition(props) {
  const [open, setOpen] = React.useState(false);
  const [Data, setData] = React.useState({});
  const [Send, setSend] = React.useState(false);
//   const [Interno,setInterno] = React.useState(false)
  const anchorRef = React.useRef(null);
  
  const SignOut = ()=>{
    let obj = {}
    obj.type = 'singOut'
    setSend(true)
    setData(obj)
  }
  const conten = (data)=>{
    switch (data) {
        case 'inicial':
            const {list,fedbac} = props.data
            return(
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <div className="nav-title pl-20 pt-20 pb-10 text-left">SETTINGS</div>
                    {list.map((e,index)=>{
                        return(
                            <div key={"sett"+index}>
                                <MenuItem onClick={handleClose}><small className="" >{e.icon} {e.text}</small></MenuItem>
                            </div>
                        )
                    })}
                    <hr className="mb-0 mt-20"/>
                    <div className="nav-title pt-20 pb-10 pl-20 text-left">FEEDBACK</div>
                    {fedbac.map((e,index)=>{
                        return(
                            <div key={"fedbac"+index}>
                                <MenuItem onClick={handleClose}><small className="" >{e.icon} {e.text}</small></MenuItem>
                            </div>
                        )
                    })}
                  </MenuList>
                </ClickAwayListener>
            )
        case 'sesion':
            return(
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <div className="w-100">
                            <div className="centrar">
                                <div className="col col-md-3">
                                    <Avatar active={false} avatar='H' clases='MuiAvatar-root-content'/>
                                </div>
                                <div className="col col-md-9 text-left">
                                    <div><strong>Héctor González</strong></div>
                                    <div><span>hgonzalez@novut.com</span></div>
                                </div>
                            </div>
                            <hr/>
                            <DropDownLeft type='status'/>
                            <div className="notification-item-lists pl-20 text-left"><small>Profile & account</small></div>
                            <div className="notification-item-lists pl-20 text-left"><small>Settings</small></div>
                            <hr/>
                            <div className="centrar">
                                <div className="col col-md-3">
                                    <Avatar active={false} avatar='HS' color='primary' clases='MuiAvatar-root-content'/>
                                </div>
                                <div className="col col-md-9 text-left">
                                    <div><strong>HtmlStream</strong><span className="badge ml-2">Pro</span></div>
                                    <div><span>hsexample@novut.com</span></div>
                                </div>
                            </div>
                            <hr/>
                            <DropDownLeft type='cutomization'/>
                            <div className="notification-item-lists pl-20 text-left"><small>Manage team</small></div>
                            <hr/>
                            <div className="notification-item-lists pl-20 text-left" onClick={()=>SignOut()}><small>Sign out</small></div>
                        </div>
                    </MenuList>
                </ClickAwayListener>
            )
        case 'app':
            const {apps} = props.data.NavbarTop
            return(
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <div>
                            <div className="text-left">
                                <h5 className="p-20 b-bottom-solid sm">Web apps & services</h5>
                                <div className="apps p-20 o-auto hvh-55">
                                    {apps.map((e,index)=>{
                                        return(
                                            <div className="row w-100 p-2 sombra m-auto" key={"app-list"+index}>
                                                <div className="col col-sm-3 centrar">
                                                    {/* <div className="badge p-3">{e.icon}</div> */}
                                                    <Avatar active={false} color='primary' avatar={e.icon} clases='MuiAvatar-root-content'/>
                                                </div>
                                                <div className="col col-sm-9">
                                                    <p className="sm">{e.title} {e.badge !== ''?<span className="badge">{e.badge}</span>:''}</p>
                                                    <p className="sm">{e.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="centrar hvh-10 search-all">
                                    <Link className="m-auto" to="/">View all apps</Link>
                                </div>
                            </div>
                        </div>
                    </MenuList>
                </ClickAwayListener>
            )
        case 'notificacion':
            return(
                <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <div className="container-fluid sp">
                            <div className="row p-10 w-100 sm">
                                <div className="col col-sm-6 centrar">
                                    <h5>Notifications</h5>
                                </div>
                                <div className="col col-sm-6 centrar">
                                    <div className='ml-auto'>
                                        <MenuListComposition icon={props.more} position='' type='inicial' data={props.data.notificacion.settings}/>
                                    </div>
                                </div>
                            </div>
                            <hr className="sm"/>
                            <Tabs datos={props.data.notificacion} inicial='mensages'/>
                        </div>
                    </MenuList>
                </ClickAwayListener>
            )
        default:
            break;
    }
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    if (props.position !== '') {
        let position = document.querySelector('#dropShadow')
        let rigth = document.querySelector('.'+props.position)
        setTimeout(() => {
            if (rigth?.children.length > 0 ) {
                rigth.children[0].style.left = null
                rigth.children[0].style.right = '0%'
                rigth.children[0].style.top = '63px'
                rigth.children[0].style.transform = null
                if (props.width !== undefined) {
                    rigth.children[0].style.width = props.width
                }
            }
            if (position?.children.length > 0 ) {
                position.children[0].classList.add('card-shadow')
            }
        }, 100);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  window.addEventListener("scroll", function(){
        if (this.scrollY >= 0){
            setOpen(false);
        }
    }, false);
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    // <div className={classes.root}>
    <div className='w-42-px mr-8 foter-icons'>
        <SendData type={Data.type} data={Data} active={Send} setSend={setSend}/>
        <div
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {props.icon}
          {/* <Avatar active={true} avatar='H'/> */}
        </div>
      <div id='dropShadow' className={props.position}>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center right' : 'center bottom' }}
            >
              <Paper>
                {conten(props.type)}
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
