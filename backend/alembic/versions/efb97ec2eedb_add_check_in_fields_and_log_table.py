"""add_check_in_fields_and_log_table

Revision ID: efb97ec2eedb
Revises: f490f8fe6aa6
Create Date: 2025-03-22 21:58:02.423237

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'efb97ec2eedb'
down_revision = 'f490f8fe6aa6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('check_in_logs',
    sa.Column('log_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('registration_id', sa.Integer(), nullable=False),
    sa.Column('previous_status', sa.String(length=20), nullable=False),
    sa.Column('new_status', sa.String(length=20), nullable=False),
    sa.Column('timestamp', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False),
    sa.Column('admin_user_id', sa.String(), nullable=True),
    sa.Column('ip_address', sa.String(length=50), nullable=True),
    sa.Column('device_info', sa.Text(), nullable=True),
    sa.Column('notes', sa.Text(), nullable=True),
    sa.ForeignKeyConstraint(['admin_user_id'], ['user.id'], ondelete='SET NULL'),
    sa.ForeignKeyConstraint(['registration_id'], ['registrations.registration_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('log_id')
    )
    op.add_column('registrations', sa.Column('check_in_timestamp', sa.DateTime(timezone=True), nullable=True))
    op.add_column('registrations', sa.Column('checked_in_by', sa.String(), nullable=True))
    op.create_foreign_key(None, 'registrations', 'user', ['checked_in_by'], ['id'], ondelete='SET NULL')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'registrations', type_='foreignkey')
    op.drop_column('registrations', 'checked_in_by')
    op.drop_column('registrations', 'check_in_timestamp')
    op.drop_table('check_in_logs')
    # ### end Alembic commands ### 