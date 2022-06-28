import styled from 'styled-components'

export const Menu = styled.ul`
    display:flex;
    position: relative;
    top: 5px;
    & li{
        margin-left: 35px;
        list-style: none;
        padding-bottom: 15px;
        cursor: pointer;
        &:last-child{
            border-bottom: 2px solid #6195EF;
        }
        &:hover{
            border-bottom: 2px solid #6195EF;
        }
    }
`
export const BodyConatainer = styled.div`
       padding: 15px 32px;
    
`
export const ProfileContainer = styled.div`
       padding-left: 60px;
    
`
export const ProfileHeader = styled.div`
       display: flex;
       text-align: center;
       margin-left: 24px;
       & h2{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 24px;
        color: #4c4c4c;
       }
    
`
export const SingleProfileContent = styled.div`
& h6{
       font-size: 16px;
       color: #828282;
       font-weight: 600;
       }
       & span{
       display: block;
       margin-top: -8px;
       font-size: 15px;
       font-size: 700;
       font-weight: 700;
       margin-bottom: 15px;
       color: #4a4a4a;
       } 
    
`
export const EducationContainer = styled.div`
       width: 85%;
    
`
export const EducationHeader = styled.div`
       padding-top: 15px;
       padding-bottom: 18px;
       & h2{
        font-size: 18px;
        font-weight: 600;
        color: #393939;
       }
       & button{
       margin-left: 60%;
       }
    
`
export const CardMiddle = styled.div`
    font-size: 12px;
    font-weight:700;
`
export const CardLast = styled.div`
    font-size: 12px;
    font-weight:700;
    & span{
    padding-bottom: 2px;
    display: inline-block;
    }
`
export const FlexItem = styled.div`
    font-size: 18px;
    font-weight:700;
    & h6{
        padding:0;
        margin:0;
        padding-top: 3px;
        font-weight:700;
    }
    
`
export const EducationCard = styled.div`
       box-shadow: 0px 1px 10px -2px #999;
       margin-bottom: 15px;
       padding: 5px 0;
       padding-right: 10px;
       height: 155px;
    
`