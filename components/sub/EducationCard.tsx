import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: white;
  font-family: mono; /* Change font to mono */
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: white;
  font-family: mono; /* Change font to mono */
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 12px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #854CE6;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const Image = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: white;
  font-family: mono; /* Change font to mono */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Degree = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
  font-family: mono; /* Change font to mono */
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: white;
  font-family: mono; /* Change font to mono */
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  font-family: mono; /* Change font to mono */
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;



interface Education {
  img: string;
  school: string;
  degree: string;
  date: string;
  grade: string;
  desc: string;
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} alt={`${education.school} Logo`} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
