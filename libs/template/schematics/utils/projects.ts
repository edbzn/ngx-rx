import { WorkspaceSchema } from '@angular-devkit/core/src/experimental/workspace';
import { SchematicsException, Tree } from '@angular-devkit/schematics';

function getWorkspace(host: Tree): WorkspaceSchema {
  const path = '/angular.json';
  const configBuffer = host.read(path);
  if (configBuffer === null) {
    throw new SchematicsException(`Could not find (${path})`);
  }
  const config = configBuffer.toString();

  return JSON.parse(config);
}

export function getProject(host: Tree, project?: string) {
  const workspace = getWorkspace(host);
  if (workspace) {
    return workspace.projects[project || workspace.defaultProject];
  }

  throw new SchematicsException('could not find a workspace project');
}
