import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", fontSize: "20px" }}>
        <h1 style={{marginBottom:'40px'}}>Terms & Conditons</h1>
        <Row>
          <Col>
            <b>THE WEBSITE</b> <hr /> These Terms & Conditions of Use apply to
            all users of the Slice & Dice's website. The Slice & Dice's website may include
            content, information or links to third parties or third party
            websites. By accepting these Terms & Conditions of Use you agree to
            hold harmless and relieve Slice & Dice's from any liability whatsoever
            arising from your use of information from a third party or your use
            of any third-party website. Slice & Dice's recommends that before you
            disclose any personal information to a third party that you first
            read and accept the third party's privacy policy and terms and
            conditions of use if applicable of their website.
          </Col>
          <hr />
          <Row>
            <Col>
            <b>OUR ACCESS TO THE WEBSITE</b><hr /> Slice & Dice's hereby provides its permission
            for you to access its website in accordance with these Terms &
            Conditions of Use, provided that (1) your use of the website is
            solely for your individual, personal, commercial and non-commercial
            use, and (2) you will not copy, distribute or publish any part of
            the website other than as may be reasonably necessary to use the
            website for its intended purpose, and (3) you will otherwise comply
            with the Term & Conditions of Use. You agree not to use or launch,
            or cause to be used or launched, any automated system or program in
            connection with the Slice & Dice's website, online or SMS ordering,
            including without limitation, publishing or distributing vouchers or
            codes, "robots", "spiders", "offline readers" and the like.
            Notwithstanding the foregoing, Slice & Dice's grants the operators of
            public search engines permission to use spiders to copy materials
            from the website for the sole purpose of creating publicly available
            searchable indices of the materials, but not caches or archives of
            such materials. Slice & Dice's reserves the right to revoke these
            exceptions either generally or in specific cases. You agree not to
            collect or harvest any personally identifiable information from the
            website or use the communication systems provided by the website for
            any commercial solicitation purposes. You agree not to solicit for
            any reason whatsoever any users of the website with respect to their
            submissions to the website.
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
