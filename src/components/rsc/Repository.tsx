import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.backgroundColors.card};
  border-radius: 10px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.effects.glowPrimary};
  transition: transform 0.2s ease-in-out;
  max-width: 400px;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.effects.glowHover};
  }
`;

const RepoName = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const RepoDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.light};
`;

const RepoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
  transition:
    color 0.2s,
    text-shadow 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
    text-shadow: ${({ theme }) => theme.effects.glowSecondary};
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StarIcon = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const ForkIcon = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const RepositoryCard = ({
  repository: { stargazerCount, description, url, name, forkCount },
}: {
  repository: any;
}) => {
  return (
    <Card>
      <RepoName>{name}</RepoName>
      {description && <RepoDescription>{description}</RepoDescription>}
      <RepoLink href={url} target="_blank" rel="noopener noreferrer">
        🔗 Voir sur GitHub
      </RepoLink>
      <StatsContainer>
        <Stat>
          <StarIcon>⭐</StarIcon> {stargazerCount} Stars
        </Stat>
        <Stat>
          <ForkIcon>🔀</ForkIcon> {forkCount} Forks
        </Stat>
      </StatsContainer>
    </Card>
  );
};

export default RepositoryCard;
