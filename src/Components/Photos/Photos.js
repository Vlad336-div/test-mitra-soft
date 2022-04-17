import React, {useMemo} from 'react';
import Image from "../Image/Image"
import {Container, Row, Col} from "react-bootstrap"
import {useSelector} from "react-redux";

const Photos = ({activeKey}) => {
    const photos = useSelector(state => state?.photos?.photos)

    const images = useMemo(() => {
        return Array.isArray(photos[activeKey]) ? photos[activeKey] : []
    }, [photos, activeKey])

    return (
        <Container>
            <Row>
                {
                    images.slice(0, 3).map((item, idx) => {
                        return (
                            <Col key={`image_${idx+1}`} className="d-flex justify-content-center">
                                <Image
                                    src={item?.thumbnailUrl}
                                    id={item?.id}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="mt-2">
                {
                    images.slice(3, 6).map((item, idx) => {
                        return (
                            <Col key={`image_${idx+4}`} className="d-flex justify-content-center">
                                <Image
                                    src={item?.thumbnailUrl}
                                    id={item?.id}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Photos;