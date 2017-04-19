      <div className='col 6'>
        <Form horizontal onSubmit={this._handleSubmit}>
          <FormGroup controlId='formHorizontalEmail'>
            <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
            <Col sm={10}>
              <FormControl type='email' placeholder='Email' name='email' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
            <Col sm={10}>
              <FormControl type='password' placeholder='Password' name='password' />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='submit' className='deep-purple darken-2'>
                  Sign in
                </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
