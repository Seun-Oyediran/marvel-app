import styled, { keyframes } from 'styled-components'

function handle(condition, a, b) {
    if (condition) {
        return a
    } else {
        return b
    }
}


export const ContentDiv = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:2fr 1fr;
grid-gap: 1rem;
position: relative;
z-index: 1;
@media(max-width:800px){
    grid-template-columns: 1fr;
}
`



export const SideBars = styled.li`
color: var(--green);
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
opacity: ${({ active }) => handle(active, '1', '0.6')};
`

export const InputStyle = styled.input`
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
background-color: transparent;
padding: 0.5rem;
font-size: 17px;
border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')};
outline: none;
border-radius:8px;
width:70%;
@media (max-width:800px){
    width: 80%;
}
@media (max-width:500px){
    width: 100%;
}
& :focus{
    box-shadow: 0px 0px 2px ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
    border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.8)', 'rgba(0,0,0,0.8)')};
}

`



export const JumpInput = styled.input`
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
padding: 0.3rem;
font-size: 17px;
border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')};
outline: none;
border-radius:8px;
width:70px;
margin: 0 0.3rem;
background-color: transparent;
text-align: center;
& :focus{
    box-shadow: 0px 0px 2px ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
    border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.8)', 'rgba(0,0,0,0.8)')};
}
`



export const Remove = styled.div`
background-color: ${({ darkTheme }) => handle(!darkTheme, 'rgba(255,255,255,0.5)', 'rgba(0,0,0,0.5)')};
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
position: fixed;
top:0;
left:0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 5;
& >div{
    background-color: ${({ darkTheme }) => handle(!darkTheme, '#cccccc', '#333333')};
    max-width:250px;
    display:flex;
    flex-direction: column;
    text-align: center;
    border-radius: 12px;
    overflow: hidden;
    padding-top: 0.85rem;
}
& >div h3{
    padding: 2rem;
}
& >div p{
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    color: white;
}
& >div p:hover{
    color:black;
}
& >div .btns{
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    margin-top: 0.7rem;
}
`


export const MenuIcon = styled.div`
position:absolute;
top: 50%;
left:5px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 0.5rem;
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
z-index:5;
cursor: pointer;
font-size:20px;
transform: translate(0,-50%);

& :hover{
    transform:translate(0,-50%) scale(1.05);
}
`

export const CloseIcons = styled.div`
position:fixed;
top: 5px;
left:200px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 0.6rem;
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
z-index:9;
cursor: pointer;


& :hover{
    transform: scale(1.05);
}
`


export const SelectStyle = styled.select`
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
background-color: transparent;
padding: 0.5rem;
font-size: 17px;
border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')};
outline: none;
border-radius:8px;
width:70%;
margin: 1rem 0;
& :focus{
    box-shadow: 0px 0px 2px ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
    border: 2px solid ${({ darkTheme }) => handle(darkTheme, 'rgba(255,255,255,0.8)', 'rgba(0,0,0,0.8)')};
}
@media (max-width:800px){
    width: 80%;
}
@media (max-width:500px){
    width: 100%;
}
`


export const OptionStyle = styled.option`
color: ${({ darkTheme }) => handle(darkTheme, 'var(--white)', 'var(--black)')};
background-color: ${({ darkTheme }) => handle(!darkTheme, '#cccccc', '#333333')};
padding: 0.5rem 0;
`

const lightBoxShadow = '0px 3px 10px rgba(0,0,0,0.3)'
const darkBoxShadow = '0px 3px 10px rgba(255,255,255,0.3)'

export const NavStyle = styled.nav`
position:fixed;
top:0;
right:0;
max-height: 50px;
width:100%;
z-index:4;
display:flex;
justify-content: center;
align-items: center;
padding: 0.6rem;
position:reltive;
background: ${({ darkTheme }) => handle(!darkTheme, 'linear-gradient(298deg, #D7E1EC,white )', 'linear-gradient(298deg, #0f0f0f,black)')};
box-shadow: ${({ darkTheme }) => handle(!darkTheme, lightBoxShadow, darkBoxShadow)};
& .nav-img{
    height:100%;
}
& img{
    max-width:100px;
    height: auto;
    margin:0.5rem;
    overflow:hidden;
}
`


export const LoaderStyle = styled.div`
position: fixed;
top:0;
left:0 ;
right: 0;
bottom: 0;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 20;

& div{
    padding:1rem 2rem;
}
& img{
    display:block;
    max-width: 500px;
}
& p{
    margin:1rem 0;
    text-align: center;
    font-weight: 700;
}
`