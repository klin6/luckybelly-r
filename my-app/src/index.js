import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Image, Grid, Divider, List, Form } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image item src='http://luckybelly.com/img/lucky-logo-light.png' />
            <Menu.Item fitted position="right"></Menu.Item>
          <Dropdown text="Menus" icon="none" aligned>
            <Dropdown.Menu>
              <Dropdown.Item>Lunch</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <Dropdown text="Info" icon="none">
              <Dropdown.Menu>
                <Dropdown.Item>Hours</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Contact" icon="none">
              <Dropdown.Menu>
                <Dropdown.Item>Directions</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Breaking Bread Hospitality" icon="none">
              <Dropdown.Menu>
                <Dropdown.Item>Livestock</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
      </Menu>
  )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='http://luckybelly.com/img/bellybowl.jpg' fluid/>
    )
  }
}
class FooterMenu extends React.Component {
  render() {
    return (
        <Form className="footer-background" >
          <Grid centered columns={3} container>
            <Grid.Column>
              <Image src='http://luckybelly.com/img/lucky-logo-light.png' />
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>Links</Menu.Item>
              <Divider />
              <List>
                <List.Item>Hours</List.Item>
                <List.Item>Menus</List.Item>
                <List.Item>Reservations</List.Item>
                <List.Item>Corkage</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Menu.Item>Contact</Menu.Item>
              <Divider />
              <List>
                <List.Item>808-531-1888</List.Item>
                <List.Item>eat@luckybelly.com</List.Item>
                <List.Item>50 N. Hotel St. Honolulu, Hi 96817</List.Item>
              </List>
            </Grid.Column>

          </Grid>
        </Form>
    )
  }
}

class LuckyBelly extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<LuckyBelly/>, document.getElementById('root'));