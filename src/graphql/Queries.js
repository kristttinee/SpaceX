import { gql, useQuery } from '@apollo/client';

export const GET_PAST_LAUNCHES = gql`
{
  launchesPast {
    mission_name
    details
    links {
      flickr_images
    }
  }
}
`;
