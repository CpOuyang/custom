# allotted mac-book would load the very initial hostname in each session
# remember to set NOPASSWD up in sudo command
# sudo hostname -fs "CP-MBP-DRD"

# pip upgrade all
alias pipua="pip list --outdated --format freeze | cut -d= -f1 | xargs pip install --upgrade"

alias ls="ls -G"
alias la="ls -Al"
alias ll="ls -l"

alias tree="tree -C"

alias dc="docker-compose"

alias gl="git log --graph --pretty=oneline --abbrev-commit"

git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

export CLICOLOR=1
export LSCOLORS=gxfxcxdxbxegedabagacad
export PS1='\[\e[1;35m\][\t]\[\e[1;32m\]\u\[\e[0;1m\]@\[\e[33m\]\h\[\e[0;1m\]:\[\e[0m\] \[\e[1;36m\]\w\[\e[34m\]$(git_branch)\[\e[0m\] \$ '

# enable ~/.pyenv/shims in $PATH
if command -v pyenv 1>/dev/null 2>&1; then
    eval "$(pyenv init -)"
fi

# enable brew bash_completion
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

# locale
export LC_ALL=en_US.UTF-8
export PATH="/usr/local/sbin:$PATH"
