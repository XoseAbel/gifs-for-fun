import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { getApi } from '../api/getApi';

const GifAreaF = props => {
  const [gifUrls, setGifUrls] = useState();
  const [errorUrls, setErrorUrls] = useState();
  //Ruta: data<[index]<images<original<url

  // async componentDidMount() {
  //   const data = await getApi(this.props.search);
  //   this.setState({ trendingUrls: data });
  // }

  // async componentDidUpdate(prevProps) {
  //   console.log(prevProps.search, this.props.search);
  //   if (this.props.search !== prevProps.search) {
  //     const data = await getApi(this.props.search);
  //     this.setState({ trendingUrls: data });
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      const data = await getApi(props.search, props.page, props.limit);
      if (data.error === '') {
        setGifUrls(data.arrayUrls);
        props.setMaxPage(data.pagination.total_count);
      } else {
        setErrorUrls(data.error);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div>
      <Container>
        <Row>
          {gifUrls ? (
            gifUrls.map(value => {
              return (
                <Col xs='3'>
                  <span>
                    <img className='img-fluid p-1' src={value} alt='gif' />
                  </span>
                </Col>
              );
            })
          ) : errorUrls ? (
            <img
              className='img-fluid p-1'
              src='https://media1.giphy.com/media/1RkDDoIVs3ntm/100w.gif?cid=78e2744eoza6ejfgsprydptep03p7oqp7dkr0g7nzgmfff8b&rid=100w.gif'
              alt='gif'
            />
          ) : (
            <span>
              <p>Estamos trabajando en ello</p>
              <Spinner color='danger' />
            </span>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default GifAreaF;
