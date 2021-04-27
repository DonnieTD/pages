type Events = {
  id: string;
  url: string;
  text: string;
};

type EventTransfornm = (x: any[]) => Events[];

export const EventTransform: EventTransfornm = (x: any[]) => {
  return x.map((x) => {
    switch (x.type) {
      case "CreateEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} created ${x.repo.name}`,
        };
      case "DeleteEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} deleted ${x.repo.name}`,
        };
      case "GollumEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} worked on a wiki for ${x.repo.name}`,
        };
      case "MemberEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} ${x.payload.action} a member to ${x.repo.name}`,
        };
      case "PublicEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} made ${x.repo.name} public!`,
        };
      case "PullRequestEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} created a pr for ${x.repo.name}`,
        };
      case "PullRequestReviewEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} reviewed a pr for ${x.repo.name}`,
        };
      case "PullRequestReviewCommentEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} reviewed and commented on a pr for ${x.repo.name}`,
        };
      case "WatchEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} started watching ${x.repo.name}`,
        };
      case "IssuesEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} ${x.payload.action} an issue for ${x.repo.name}`,
        };
      case "ForkEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} forked ${x.repo.name}`,
        };
      case "IssueCommentEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} commented on an issue regarding ${x.repo.name}`,
        };
      case "PushEvent":
        return {
          id: x.id,
          url: x.actor.avatar_url,
          text: `${x.actor.login} pushed to ${x.repo.name}`,
        };
      default:
        throw new Error("Unhandled event type");
    }
  });
};
