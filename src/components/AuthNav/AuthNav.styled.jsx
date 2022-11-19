import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  &:hover {
    color: #29405a;
  }
`;
