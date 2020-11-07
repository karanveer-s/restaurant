import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Admin = () => {
  return (
    <Form inline style={{display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"column" , backgroundImage:"url("+"https://img.freepik.com/free-photo/white-wall-texture-background-backdrop-composition_1962-1027.jpg?size=626&ext=jpg&ga=GA1.2.1192447133.1603522449"+")" , height:"100vh"}}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="adminName" className="mr-sm-2">Name</Label>
        <Input type="text" name="adminName" placeholder="Restaurant Name" />
      </FormGroup><br/>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="adminDiscription" className="mr-sm-2">Discription    </Label>
        <Input type="text" name="adminDiscription" placeholder="Restaurant Discription" />
      </FormGroup><br/>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="adminUrl" className="mr-sm-2">Image</Label>
        <Input type="text" name="adminUrl" placeholder="Image Url" />
      </FormGroup><br/>
      <Button>Submit</Button>
    </Form>
  );
}

export default Admin;