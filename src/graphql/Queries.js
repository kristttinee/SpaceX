import { gql } from '@apollo/client';

export const GET_PAST_LAUNCHES = gql`
query GetLaunchesPast {
  launchesPast {
    mission_id
    mission_name
    details
    links {
      flickr_images
    }
  }
}
`;

export const SHIPS = gql`
{
  ships {
    name
    image
    id
  }
}
`;

