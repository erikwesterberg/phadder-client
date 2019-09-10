import React from 'react'
import { Button, Modal} from 'semantic-ui-react'

const CityFetcher = () => (
  <Modal
    trigger={<Button id="get-location-button">Show Modal</Button>}
    header='Step 1: Enter your post code'
    
    actions={['Cancel', { key: 'done', content: 'Done', positive: true }]}
    
    />
)

export default CityFetcher;