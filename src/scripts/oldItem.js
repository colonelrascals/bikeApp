     <div>
       <Col xs={6} md={4}>
         <Thumbnail src={this.props.itemModel.get('photoUrl')} alt='242x200'>
           <h2>{this.props.itemModel.get('make')}</h2>
           <h3>{this.props.itemModel.get('model')}</h3>
           <small>{this.props.itemModel.get('year')}</small>
           <p>{this.props.itemModel.get('description').substr(0, 10)}</p>
           <h4>${this.props.itemModel.get('price')}</h4>
           <p />
         </Thumbnail>
       </Col>
     </div>
