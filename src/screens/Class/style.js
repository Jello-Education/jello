import styled from 'styled-components';

import LoaderSpinner from '../../components/ui/LoaderSpinner.component';
import { FontWeight, MediaQuery } from '../../styles/variables';

export const LessonsContainer = styled.section`
  position: relative;
  padding: 0 60px;
  margin-top: -130px;

  @media ${MediaQuery.TABLET_DOWN} {
    padding: 0 24px;
    margin-top: 0;
  }
`;

export const LessonsTitle = styled.h3`
  font-weight: ${FontWeight.REGULAR};
  font-size: 30px;
  color: #fff;
  margin-bottom: 17px;

  @media ${MediaQuery.TABLET_DOWN} {
    font-size: 16px;
  }
`;

export const Section = styled.section`
  margin-top: 67px;

  &:last-child {
    padding-bottom: 67px;
    margin-top: 181px;
  }

  @media ${MediaQuery.TABLET_DOWN} {
    margin-top: 48px;

    &:last-child {
      padding-bottom: 48px;
      margin-top: 48px;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h3`
  color: #fff;
  font-weight: ${FontWeight.MEDIUM};
  font-size: 48px;
  line-height: 64px;

  @media ${MediaQuery.TABLET_DOWN} {
    font-weight: ${FontWeight.REGULAR};
    font-size: 30px;
    line-height: 44px;
  }
`;

export const SecondarySectionTitle = styled.h3`
  color: #fff;
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: 46px;
  line-height: 54px;

  @media ${MediaQuery.TABLET_DOWN} {
    font-weight: ${FontWeight.REGULAR};
    font-size: 30px;
    line-height: 44px;
  }
`;

export const SectionSubtitle = styled.h4`
  color: #fff;
  font-weight: ${FontWeight.REGULAR};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 48px;

  @media ${MediaQuery.TABLET_DOWN} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 36px;
  }
`;

export const SectionButton = styled.a`
  color: #3be529;
  font-size: 24px;
  line-height: 32px;

  @media ${MediaQuery.TABLET_DOWN} {
    margin-top: 20px;
    display: block;
    font-size: 20px;
  }
`;

export const CustomLoaderSpinner = styled(LoaderSpinner)`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
